// import { useLocation } from 'react-router-dom'
// import {
//   ProductCategory,
//   ProductDescription,
//   ProductPrice,
//   ProductSummary,
//   ProductTitle,
// } from '../components/form'
// import { useEffect, useState } from 'react'
// import { FormField } from '../components'

// let initialFormData = {
//   title: '',
//   category: '',
//   description: '',
//   buyPrice: 0.0,
//   rentPrice: 0.0,
// }

// const EditProduct = () => {
//   const [data, setData] = useState(initialFormData)

//   const updateFields = (e) => {
//     setData((prev) => {
//       return { ...prev, ...data }
//     })
//   }
//   const location = useLocation()
//   const { key, title, category, description, buyPrice, rentPrice } =
//     location.state
//   // console.log(title)

//   // useEffect(() => {
//   //   setData({ ...data, title, category, description, buyPrice, rentPrice })
//   // }, [title, category, description, buyPrice, rentPrice])

//   return (
//     <div
//       className="login template d-flex justify-content-center align-items-center 100-w"
//       style={{ minHeight: '100vh' }}
//     >
//       <form action="">
//         <div className="d-flex flex-column justify-content-between">
//           <input type="text" onChange={updateFields} />
//           <FormField
//             type={'text'}
//             name={'title'}
//             value={title}
//             labelText={'Title'}
//             handleChange={updateFields}
//           />
//           <FormField
//             type={'text'}
//             name={'category'}
//             value={category}
//             labelText={'Category'}
//             handleChange={updateFields}
//           />
//           <FormField
//             type={'text'}
//             name={'description'}
//             value={description}
//             labelText={'description'}
//             handleChange={updateFields}
//           />
//           <FormField
//             type={'number'}
//             name={'buyPrice'}
//             value={buyPrice}
//             labelText={'Price'}
//             handleChange={updateFields}
//           />
//           <FormField
//             type={'number'}
//             name={'rentPrice'}
//             value={rentPrice}
//             labelText={'Rent'}
//             handleChange={updateFields}
//           />
//         </div>
//       </form>
//     </div>
//   )
// }
// export default EditProduct
