import React, { useEffect, useState } from "react";
import styles from "./about.module.scss";
import { useWeb3 } from "@3rdweb/hooks";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  getBalance,
  getTotalSupply,
  TransferBalanceContract,
} from "../../Actions/ContractDemoActions";
import { toast } from "react-toastify";
import { ContractAddressDemo } from "../../utils/constants/app.constants";
const About = () => {
  const { address } = useWeb3();
  const [loading, setloading] = useState(false);
  const [contractInfo, setcontractInfo] = useState({
    contractaddress: "-",
    balanceContract: "",
    totalSupply: "",
  });

  const getBalanceFormik = useFormik({
    initialValues: {
      balance: "",
    },
    validationSchema: Yup.object().shape({
      balance: Yup.string().required("Enter Contract Address"),
    }),
    onSubmit: async (values, restProps) => {
      if (!address) {
        toast.error("Connect to metamask first");
        return;
      }
      let contractbalance = await getBalance(address);
      let getSupplycontract = await getTotalSupply();
      setcontractInfo({
        contractaddress: values,
        balanceContract: contractbalance,
        totalSupply: getSupplycontract,
      });
    },
  });

  const TransferBalance = useFormik({
    initialValues: {
      address: "",
      amount: "",
    },
    validationSchema: Yup.object().shape({
      address: Yup.string().required("Enter Contract Address"),
      amount: Yup.string().required("Enter Amount"),
    }),
    onSubmit: async (values, restProps) => {
      if (!address) {
        toast.error("Plz Connect to MetaMask First");
        return;
      }
      try {
        //converting entered amount into wei//
        let enteredAmount = Number(values.amount) * 1e9;
        setloading(true);
        let transfer = await TransferBalanceContract(
          values.address,
          enteredAmount
        );
        const transactionParameters = {
          to: ContractAddressDemo,
          from: address,
          data: transfer,
        };

        await toast.promise(
          ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
          }),
          {
            pending: "Promise is pending",
            success: "Promise  Loaded",
            error: "error",
          }
        );
        setloading(false);
        restProps.resetForm();
      } catch (error) {
        toast.error(`${error}`);
        setloading(false);
      }
    },
  });

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <form
            className={styles.balance}
            onSubmit={getBalanceFormik.handleSubmit}
          >
            <div className={styles.heading}>Read Functions</div>
            <input
              type="text"
              placeholder="Enter Contract Address"
              {...getBalanceFormik.getFieldProps("balance")}
            />
            {getBalanceFormik.touched.balance &&
            getBalanceFormik.errors.balance ? (
              <p>{getBalanceFormik.errors.balance}</p>
            ) : null}
            <button type="submit">Get Balance</button>
          </form>
          <div className={styles.showData}>
            <div className={styles.address}>
              <label>Address</label>
              <p>
                {contractInfo?.contractaddress?.balance
                  ? contractInfo?.contractaddress?.balance
                  : "Not Available Address"}
              </p>
            </div>
            <div className={styles.address}>
              <label>Balance</label>
              <p>
                {contractInfo?.balanceContract
                  ? contractInfo?.balanceContract
                  : 0}
              </p>
            </div>
            <div className={styles.address}>
              <label>Supply</label>
              <p>{contractInfo?.totalSupply ? contractInfo?.totalSupply : 0}</p>
            </div>
          </div>
          <form
            className={styles.balance}
            onSubmit={TransferBalance.handleSubmit}
          >
            <div className={styles.heading}>Write Functions</div>
            <input
              type="text"
              placeholder="Enter Contract Address"
              {...TransferBalance.getFieldProps("address")}
            />
            {TransferBalance.touched.address &&
            TransferBalance.errors.address ? (
              <p>{TransferBalance.errors.address}</p>
            ) : null}
            <input
              type="number"
              placeholder="Enter Amount"
              {...TransferBalance.getFieldProps("amount")}
            />
            {TransferBalance.touched.amount && TransferBalance.errors.amount ? (
              <p>{TransferBalance.errors.amount}</p>
            ) : null}
            <button type="submit">
              {loading ? "loading..." : "Transfer Balance"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
