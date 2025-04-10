import pp from "../assets/img/pp.png";

export default function NameSection(){
  return (
    <>
      <br /> {/* to fix */}
      <section className='name-section'>        
        <img className='pp' src={pp} alt="Profile pic" />
        <h1>Lylian BALL <i className="fa-solid fa-star fa-flip fa-2xs"></i></h1> 
      </section>
      <br />
    </>
  )
}