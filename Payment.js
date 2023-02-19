
import { Formik,Form,Field } from "formik";
import { Link } from "react-router-dom";


function Payment(){

    return(

      <>
        <div>
        <div>
        <h1 className="font-bold text-2xl ml-10 mt-4 mt-2 py-2 border-b-[1px] border-gray-200 w-[1000px]">Payment</h1>

        <div className="w-[1000px] ml-10">
          <h1 className="font-light"><h1 className="font-bold mt-2">Payment Rules</h1>This policy provides the framework for payments for goods and services benefitting the University and purchased by employees and students, as well as payments of reimbursement to employees and students for approved expenses incurred in support of the mission of the University. It is the policy of the University to ensure that University resources are applied in an appropriate and timely manner, with appropriate fiscal controls, and in compliance with state and federal regulations, sponsored project agreements and donor restrictions. The principles that guide payment policy at Rice University</h1>
        </div>
        
</div>
 <div className="ml-[400px] mt-10 py-4 w-60 bg-yellow-200 rounded-lg shadow-sm hover:shadow-2xl hover:bg-pink-200">
   
        <Formik initialValues={{NetBanking:"",CashonDelivery:"",BhimUPI:""}}>

        <Form>


            <label className="ml-5 mr-10">Net Banking</label> 
         <Field name="NetBanking" type="radio" value="Net Banking"/> <br></br>

         
         <label className="ml-5 mr-3">Bhim UPI/Paytm</label>
         <Field name="NetBanking" type="radio" value="Bhim UPI/Paytm"/><br></br>


         
         <label className="ml-5 mr-[9px]">Cash on Delivery</label>
         <Field name="NetBanking" type="radio" value="Cash on Delivery"/><br></br>


            <Link to="/varified"><button type="submit" className="px-2 mt-3 ml-24 rounded-sm border-green-100 bg-green-200 hover:bg-pink-100  hover:border-pink-100">Pay</button></Link>


        </Form>

        </Formik>

        </div>
        
        </div>
</>
)

}

export default Payment;