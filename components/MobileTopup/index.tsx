// "use client"
// import React from 'react'
// import styles from "./mobileTopup.module.scss"
// import Marquee from 'react-fast-marquee';
// import { Form, Formik } from 'formik';
// import PhoneInput from 'react-phone-input-2';
// import CustomSelect from './components/CustomSelect';
// import Button from '../_Common/Button';
// import * as Yup from "yup";
// import { useMobileTopup } from '../useHook/useMobileTopup';

// const MobileTopupComp = () => {
//   const { states, handlers } = useMobileTopup();
//   const {
//     phone,
//     amount,
//     countries,
//     countryObject,
//     countryCode,
//     minAmount,
//     maxAmount,
//     formValues,
//     loading,
//     transaction,
//     fixedAmount,
//     tokenList,
//     amountToBePaid,
//     transactionLoader,
//     operatorList,
//     statusScreen,
//     activateMessage,
//     setCopyAddress,
//     copyAddress,
//     invoicePayload,
//   } = states;
//   const {
//     setAmount,
//     setPhone,
//     setOperatorId,
//     requestMobileTopup,
//     setCountryCode,
//     setCountryObject,
//     fetchMobileOperatorDetails,
//     getTotalAmountConvertedInTokenSelected,
//     submitHandler,
//     getOperatorByCountryCode,
//   } = handlers;
//   const prepairedPhoneListMarque = [
//     "Prepaid Phones Only NOT Postpaid",
//     "Prepaid Phones Only NOT Postpaid",
//     "Prepaid Phones Only NOT Postpaid",
//     "Prepaid Phones Only NOT Postpaid",
//   ];


//   const validationSchema = Yup.object({
//     number: Yup.string().required("This field is required"),
//     chain: Yup.string().required("This field is required"),
//     amount: Yup.number()
//       .min(0.65)
//       .max(10000)
//       .required(`Amount must be greater than or equal to  0.65 dollar`),
//   });

//   return (
//     <div className={styles.wrapper}>
//       <Marquee
//         className={styles.marquee}
//         style={{ gap: "1.25rem" }}
//         speed={60}
//         gradient={false}
//       >
//         {prepairedPhoneListMarque.map((item, index) => {
//           return (
//             <div className={styles.box} key={index}>
//               <div className={styles.asteriktxt}>*</div>
//               <div className={styles.txt}>{item}</div>
//             </div>
//           );
//         })}
//       </Marquee>
//       <div className={styles.containers}>
//         {statusScreen === 0 ? (
//           <div className={styles.headerWrapper}>
//             <div className={styles.myBox}>
//               <p className={styles.heading}>Mobile TopUp </p>
//               <div className={styles.box}>
//                 <Formik
//                   initialValues={{
//                     number: "",
//                     operator: "",
//                     chain: "",
//                     amount: "",
//                   }}
//                   validationSchema={validationSchema}
//                   onSubmit={submitHandler}
//                   enableReinitialize
//                 >
//                   {({
//                     isSubmitting,
//                     values,
//                     handleChange,
//                     handleSubmit,
//                     errors,
//                     submitCount,
//                     setFieldValue,
//                   }) => (
//                     <Form
//                       noValidate
//                       className={styles.formContainer}
//                       onSubmit={handleSubmit}
//                     >
//                       <div className={styles.row}>
//                         <label>Select Country & Phone Number</label>
//                         {/* <PhoneInput
//                           country={countryCode}
//                           onlyCountries={countries?.map(
//                             ({ isoName }) => isoName
//                           )}
//                           inputProps={{
//                             name: "number",
//                             required: true,
//                           }}
//                           onBlur={(e) => {
//                             let phone = e?.target?.value;
//                             let phoneNumber = String(phone).replace(
//                               /\D/g,
//                               ""
//                             );
//                             getOperatorByCountryCode(
//                               phoneNumber,
//                               setFieldValue
//                             );
//                           }}
//                           onChange={(value, data, e) => {
//                             setPhone(value);
//                             setCountryObject(data);
//                             handleChange(e);

//                             if (countryCode !== data?.countryCode) {
//                               setCountryCode(data?.countryCode);
//                               fetchMobileOperatorDetails(data?.countryCode);
//                             }
//                           }}
//                           value={phone}
//                           buttonClass={styles.dropdown}
//                           dropdownClass={styles.dropdownOpen}
//                           inputClass={styles.inputClass}
//                         /> */}

//                         {submitCount > 0 && errors.number && (
//                           <div className={styles.error}>{errors.number}</div>
//                         )}
//                       </div>
//                       <div className={styles.row}>
//                         <CustomSelect
//                           //@ts-ignore
//                           disabled={false}
//                           options={[]}
//                           label="Your Operator"
//                           removeDropdown
//                           name="operator"
//                           placeholder="Your network operator"
//                         />
//                       </div>
//                       <div className={styles.row}>
//                         <CustomSelect
//                           //@ts-ignore
//                           disabled={false}
//                           options={[]}
//                           label="Select Coin"
//                           name="chain"
//                           handleChange={(value) => {
//                             // getTotalAmountConvertedInTokenSelected(
//                             //   value,
//                             //   values?.amount
//                             // );
//                           }}
//                           placeholder="Select"
//                         />
//                       </div>
//                       {/* {fixedAmount?.length > 0 ? (
//                         <div className={styles.row}>
//                           <CustomSelect
//                             disabled={loading ? loading : false}
//                             options={fixedAMountList}
//                             label="Please Select Amount (In Dollars)"
//                             name="amount"
//                             handleChange={(value) => {
//                               setAmount(Number(value));
//                               getTotalAmountConvertedInTokenSelected(
//                                 values?.chain,
//                                 value
//                               );
//                             }}
//                             placeholder="Select"
//                           />
//                         </div>
//                       ) : ( */}
//                       <div className={styles.row}>
//                         <label>Recharge Amount (In Dollar)</label>
//                         <input
//                           type="number"
//                           name="amount"
//                           className={styles.inputControl}
//                           id="validationCustom01"
//                           placeholder="5.00"
//                           disabled={false}
//                           required
//                           value={String(values.amount)}
//                           // min={minAmount}
//                           // max={maxAmount}
//                           onChange={(e) => {
//                             let value = e?.target?.value;
//                             //@ts-ignore
//                             setAmount(Number(value));
//                             getTotalAmountConvertedInTokenSelected(
//                               values?.chain,
//                               value
//                             );
//                             handleChange(e);
//                           }}
//                         />
//                         {submitCount > 0 && errors.amount && (
//                           <div className={styles.error}>
//                             {errors.amount}
//                           </div>
//                         )}
//                       </div>
//                       {/* )} */}

//                       {/* {amountToBePaid ? (
//                         <div className={styles.amountTxt}>
//                           Amount to be Paid in your selected {values?.chain}{" "}
//                           is: {amountToBePaid}
//                         </div>
//                       ) : null} */}
//                       <div className={styles.buttonWrapper}>
//                         <Button
//                           primary={true}
//                           disabled={false}
//                           //@ts-ignore
//                           className="btn-topup mt-1 "
//                           type="submit"
//                         >
//                           Top Up
//                         </Button>
//                       </div>
//                     </Form>
//                   )}
//                 </Formik>
//               </div>
//             </div>
//           </div>
//         ) : statusScreen === 3 ? (
//           <>
//             {/* {transactionLoader ||
//               (transaction && (
//                 <div className={styles.detailsContainer}>
//                   {transactionLoader ? (
//                     <div className={styles.loader}>Order Processing ...</div>
//                   ) : null}

//                   <div className={styles.deatisl}>
//                     <div className={styles.heading}> Transaction Details</div>
//                     <div className={styles.transactionContainer}>
//                       <div className={styles.box}>
//                         <label className={styles.txt}>Transaction Id</label>
//                         <label className={styles.txt}>
//                           {transaction?.transactionId}
//                         </label>
//                       </div>
//                       <div className={styles.boxOutRadius}>
//                         <label className={styles.txt}>Date & Time </label>
//                         <label className={styles.txt}>
//                           {transaction?.transactionDate}
//                         </label>
//                       </div>
//                       <div className={styles.boxOutRadius}>
//                         <label className={styles.txt}>status</label>
//                         <label className={styles.txt}>
//                           {transaction?.status}
//                         </label>
//                       </div>
//                       <div className={styles.boxOutRadius}>
//                         <label className={styles.txt}>Mobile Number</label>
//                         <label className={styles.txt}>
//                           {transaction?.recipientPhone}
//                         </label>
//                       </div>
//                       <div className={styles.boxOutRadius}>
//                         <label className={styles.txt}>Requested Amount</label>
//                         <label className={styles.txt}>
//                           {transaction?.requestedAmountCurrencyCode}{" "}
//                           {transaction?.requestedAmount}
//                         </label>
//                       </div>
//                       <div className={styles.boxOutRadius}>
//                         <label className={styles.txt}>Delivered Amount</label>
//                         <label className={styles.txt}>
//                           {transaction?.deliveredAmountCurrencyCode}{" "}
//                           {transaction?.deliveredAmount}
//                         </label>
//                       </div>
//                       <div className={styles.boxEndRadius}>
//                         <label className={styles.txt}>Operator Name</label>
//                         <label className={styles.txt}>
//                           {transaction?.operatorName}
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))} */}
//           </>
//         ) : null}
//       </div>
//     </div>
//   )
// }

// export default MobileTopupComp