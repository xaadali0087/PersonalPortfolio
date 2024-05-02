// /* eslint-disable react-hooks/exhaustive-deps */
// import axios from "axios";
// import { useCallback, useEffect, useState } from "react";
// import { axiosApiInstance } from "../../utils/axios.interceptor";
// import { BASE_URL } from "../../utils/appConstant";
// import { useDispatch, useSelector } from "react-redux";



// const intialValues = {
//   number: "",
//   operator: "",
//   chain: "",
//   amount: "",
// };
// export const useMobileTopup = () => {
//   const [countries, setCountries] = useState([]);
//   const [phone, setPhone] = useState("");
//   const [amount, setAmount] = useState();
//   const [countryCode, setCountryCode] = useState("us");
//   const [transaction, setTransaction] = useState(null);
//   const [copyAddress, setCopyAddress] = useState(false);
//   const [countryObject, setCountryObject] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [transactionLoader, setTransactionLoader] = useState(true);

//   const [operatorId, setOperatorId] = useState(null);
//   const [selectCoinAddress, setSelectCoinAddress] = useState("");

//   const [userPayload, setUserPayload] = useState(null);

//   const [tokenList, setTokenList] = useState([]);
//   const [selectCoin, setSelectCoin] = useState([]);

//   const [operatorList, setOperatorList] = useState([]);

//   const [formValues, setFormValues] = useState(intialValues);

//   const [fixedAmount, setFixedAmount] = useState([]);

//   const [minAmount, setMinAmount] = useState(0);
//   const [maxAmount, setMaxAmount] = useState(10);
//   const [feeToken, setFeeToken] = useState(0);

//   const [amountToBePaid, setAmountToBePaid] = useState(null);
//   const [statusScreen, setStatusScreen] = useState(0);
//   const [activateMessage, setActivateMessage] = useState(false);

//   const [invoicePayload, setInvoicePayload] = useState(null);
//   const [invoiceCheck, setInoiceCheck] = useState(false);

  
  


//   const dispatch = useDispatch();
  

//   const getMobileTopUpStatus = useCallback(
//     (transactionId) => {
//       let data = {
//         token: localStorage.getItem("token"),
//         transactionId: transactionId,
//       };
//       axiosApiInstance.post(`${BASE_URL}/mobile/topup/get/topup/status`, data)
//       .then((res) => {
//           const data = res?.data?.payload;
//           if (data?.status !== "SUCCESSFUL") {
//             // alert.show(`Transaction is being processed`, { type: "success" });
//             setTimeout(() => {
//               getMobileTopUpStatus(transactionId);
//             }, 5000);
//             setStatusScreen(2);
//           } else {
//             setTransactionLoader(false);
//             // alert.success("Order Completed Successfully", {
//             //   timeout: 2000, // custom timeout just for this one alert
//             // });

//             setTransaction({
//               ...data?.transaction,
//               status: data?.status,
//             });
//             setStatusScreen(3);
//           }
//         })
//         .catch((error) => {
//           console.log("error", error);
//           setStatusScreen(0);
//         });
//     },
//     [alert]
//   );

//   const requestMobileTopup = useCallback(
//     (values) => {
//       let phoneNumber = String(values?.number).replace(/\D/g, "");
//       let data = {
//         token: localStorage.getItem("token"),
//         operatorId: operatorId,
//         amount: values?.amount,
//         countryCode: countryCode,
//         number: phoneNumber,
//       };
//       axiosApiInstance
//         .post(`${BASE_URL}/mobile/topup/make/topup`, data)
//         .then((res) => {
//           let data = res?.data?.payload;
//           let transactionId = data?.transactionId;
//           setStatusScreen(2);
//           // alert.success("Please wait we are processing your request ", {
//           //   timeout: 2000, // custom timeout just for this one alert
//           // });
//           //implement full screen loader and hide form here///
//           setTimeout(() => {
//             setActivateMessage(true);
//           }, 2000);

//           setFormValues(intialValues);
//           setTransactionLoader(true);
//           // let t = 47495;
//           setTimeout(() => {
//             getMobileTopUpStatus(transactionId);
//           }, 25000);
//         })
//         .catch((error) => {
//           console.log("error", error);
//           setStatusScreen(0);
//         });
//     },
//     [alert, countryCode, getMobileTopUpStatus, operatorId]
//   );

//   const sendHandler = useCallback(
//     async (values) => {
//       try {
//         let findValues = Boolean(values) ? values : userPayload;
//         if (Number(amountToBePaid) > 0) {
//           requestMobileTopup(findValues);
//         } else {
//           setLoading(false);
//           // alert.show(`Please Add Amount greater than zero`, { type: "error" });
//         }
//       } catch (error:any) {
//         const subtractionError = error.message
//           .toLowerCase()
//           ?.includes("subtraction overflow");

//         const InsufficientFunds = error.message
//           .toLowerCase()
//           ?.includes("transfer amount exceeds balance");

//         if (subtractionError) {
//           // alert.show(
//           //   `Either you have not imported token in the wallet or you have Insufficient Funds`,
//           //   { type: "error" }
//           // );
//         } else if (InsufficientFunds) {
//           // alert.show(`Insufficient Funds`, { type: "error" });
//         } else {
//           console.log(error, "error came from here");

//           const err =
//             error?.response?.data?.message || error?.message
//               ? error?.response?.data?.message || error?.message
//               : "Something Went Wrong !";
//           // alert.show(`${err}`, { type: "error" });
//         }
//         setLoading(false);
//         setFormValues(intialValues);
//         // navigate("/shop");
//       } finally {
//         // dispatch(reset());
//       }
//     },
//     [
//       selectCoin,
//       alert,
//       amountToBePaid,
//       dispatch,
//       requestMobileTopup,
//       selectCoinAddress,
//     ]
//   );

//   const submitHandler = async (values) => {
//     try {
//       debugger;
//       setLoading(true);
//       let phoneNumber = String(values?.number).replace(/\D/g, "");
//       let filterOutCoinName =
//         values?.chain?.toLowerCase() === "bnb"
//           ? "bnbbsc"
//           : values?.chain?.toLowerCase() === "usdt"
//           ? "usdtbsc"
//           : values?.chain;

      
      
//         let params = {
//           priceCurrency: "usd",
//           priceAmount: values?.amount,
//           payCurrency: filterOutCoinName,
//           payAmount: amountToBePaid,
//           description: `Mobile Topup This Country ${countryCode}`,
//           email:  "",
//           phoneNumber: phoneNumber,
//           operatorId: values?.operator,
//           countryCode: countryCode,
//         };
//         const response = await axiosApiInstance.post(
//           `${BASE_URL}/now-payments/create-invoice`,
//           params
//         );
//         let data = response?.data?.payload;
//         setInvoicePayload(data);
//         setUserPayload(values);
//         setStatusScreen(1);
//         setInoiceCheck(true);
     
//         return;
      
//     } catch (error:any) {
//       let modifyError = error?.response?.data?.message?.message
//         ? error?.response?.data?.message?.message
//         : error?.response?.data?.message;
//       // alert.show(modifyError, { type: "error" });
//       setStatusScreen(0);
//       setLoading(false);
//       setInoiceCheck(false);
//     }
//   };

//   const checkPaymentStatus = useCallback(
//     async (response) => {
//       try {
//         let newParams = {
//           orderId: invoicePayload?.order_id,
//           paymentId: invoicePayload?.payment_id,
//         };
//         let params = Boolean(response) ? response : newParams;
//         const res = await axiosApiInstance.post(
//           `${BASE_URL}/now-payments/payment-status`,
//           params
//         );
//         let data = res?.data?.payload;
//         // let data = "success"
//         if (data === "success") {
//           setStatusScreen(2);
//           setLoading(false);
//           setInoiceCheck(false);
//           await sendHandler(userPayload);
//         } else {
//           setLoading(false);
//         }
//       } catch (error:any) {
//         let modifyError = error?.response?.data?.message?.message
//           ? error?.response?.data?.message?.message
//           : error?.response?.data?.message;
//         // alert.show(modifyError, { type: "error" });
//         setStatusScreen(0);
//       }
//     },
//     [invoiceCheck]
//   );

  
//   const getAccessToken = useCallback(() => {
//     axios
//       .get(`${BASE_URL}/mobile/topup/fetch/access-token`)
//       .then((res) => {
//         let token = res?.data?.payload?.access_token;
//         localStorage.setItem("token", token);
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   }, []);

//   const getAllCountries = useCallback(() => {
//     let data = {
//       token: localStorage.getItem("token"),
//     };
//     axiosApiInstance
//       .post(`${BASE_URL}/mobile/topup/countries`, data)
//       .then((res) => {
//         const countries = res?.data?.payload;
//         setCountries(countries);
//       })
//       .catch(async (error) => {
//         if (
//           error?.response?.data?.payload?.errorCode === "TOKEN_EXPIRED" ||
//           error?.response?.data?.payload?.errorCode === "INVALID_TOKEN"
//         ) {
//           await getAccessToken();
//           await getAllCountries();
//         }

//         console.log("error", error);
//       });
//   }, [getAccessToken]);

//   const fetchMobileOperatorDetails = useCallback(
//     (code) => {
//       let data = {
//         token: localStorage.getItem("token"),
//         countryCode: code,
//       };
//       axiosApiInstance
//         .post(`${BASE_URL}/mobile/topup/get/operator/id`, data)
//         .then((res) => {
//           let data = res?.data?.payload;
//           setOperatorList(data);
//         })
//         .catch(async (error) => {
//           if (
//             error?.response?.data?.payload?.errorCode === "TOKEN_EXPIRED" ||
//             error?.response?.data?.payload?.errorCode === "INVALID_TOKEN"
//           ) {
//             await getAccessToken();
//             await fetchMobileOperatorDetails(countryCode);
//           }

//           console.log("error", error);
//         });
//     },
//     [countryCode, getAccessToken]
//   );

//   const getOperatorByCountryCode = useCallback(
//     (phoneNum, setFieldValue) => {
//       setLoading(true);
//       let data = {
//         token: localStorage.getItem("token"),
//         countryCode: String(countryCode)?.toUpperCase(),
//         phoneNumber: phoneNum,
//       };
//       axiosApiInstance
//         .post(`${BASE_URL}/mobile/topup/auto-detect-operator`, data)
//         .then((res) => {
//           const data = res?.data?.payload;
//           setOperatorId(data?.operatorId);
//           setFieldValue("operator", data?.operatorId);
          
//           setLoading(false);
//         })
//         .catch(async (error) => {
//           setLoading(false);
//           if (
//             error?.response?.data?.payload?.errorCode === "TOKEN_EXPIRED" ||
//             error?.response?.data?.payload?.errorCode === "INVALID_TOKEN"
//           ) {
//             getAccessToken();
//             // getOperatorByCountryCode(phone);
//           }
//           console.log("error", error);
//         });
//     },
//     [countryCode, getAccessToken, phone]
//   );

//   const getTokenListPrices = useCallback(() => {
//     setLoading(true);
//     axiosApiInstance
//       .get(`${BASE_URL}/tokens/getCoin/${countryCode}`)
//       .then((res) => {
//         const data = res?.data?.payload;
//         setTokenList(data);

//         setLoading(false);
//       })
//       .catch((error) => {
//         setLoading(false);

//         console.log("error", error);
//       });
//   }, [countryCode]);

//   const getTotalAmountConvertedInTokenSelected = useCallback(
//     (tokenName, amount) => {
//       // const token = tokenList?.find(({ name }) => name === tokenName);
//       // setSelectCoinAddress(token?.contract_address);
//       // setFeeToken(token?.fee);
//       // setSelectCoin(token);

//       let price = Number(amount);
      
//       // const totalAmount = Number(price) + (Number(token?.fee) / 100) * price;
//       setAmountToBePaid(price);
//     },
//     [tokenList]
//   );

//   useEffect(() => {
//     let intervalId;
//     // Set up the interval if intervalCheck is true
//     if (invoiceCheck) {
//       intervalId = setInterval(() => {
//         let params = {
//           orderId: invoicePayload?.order_id,
//           paymentId: invoicePayload?.payment_id,
//         };
//         checkPaymentStatus(params);
//       }, 50000); // 50 seconds
//     } else {
//       clearInterval(intervalId);
//     }
//     if (statusScreen !== 1) {
//       clearInterval(intervalId);
//     }

//     // Clean up the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, [invoiceCheck]);



//   useEffect(() => {
//     getTokenListPrices();
//   }, [getTokenListPrices]);

//   useEffect(() => {
//     fetchMobileOperatorDetails(countryCode);
//   }, [countryCode, fetchMobileOperatorDetails, getMobileTopUpStatus]);

//   useEffect(() => {
//     getAllCountries();
//   }, [getAllCountries]);

//   let states = {
//     countryCode,
//     phone,
//     amount,
//     countries,
//     countryObject,
//     minAmount,
//     maxAmount,
//     formValues,
//     loading,
//     fixedAmount,
//     transaction,
//     tokenList,
//     amountToBePaid,
//     transactionLoader,
//     operatorList,
//     statusScreen,
//     activateMessage,
//     setCopyAddress,
//     copyAddress,
//     invoicePayload,
//   };
//   let handlers = {
//     setCountryCode,
//     setAmount,
//     setPhone,
//     setCountryObject,
//     requestMobileTopup,
//     fetchMobileOperatorDetails,
//     getTotalAmountConvertedInTokenSelected,
//     submitHandler,
//     getOperatorByCountryCode,
//     setOperatorId,
//   };

//   return { states, handlers };
// };
