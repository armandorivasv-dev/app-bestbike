const BuyerForm = ({ setBuyer, buyer, name, placeholder }) => {
  const handBuyerChange = (e) => {
    setBuyer({...buyer, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <input placeholder={placeholder} type='text' name={name} onChange={handBuyerChange}/>
    </div>
  )
}
export default BuyerForm;