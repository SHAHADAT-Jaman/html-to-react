import image1 from "/src/assets/image1.png";
import image2 from "/src/assets/image2.png";
function Header() {
  return (
    <>
      <section className="hero">
        <img src={image2} alt="Creativity logo" />
        <h1>Creativity starts with viewing the
          whole world differently</h1>
        <p>A service agency with customer satisfaction</p>
        <a href="#" className="btn">JOIN US</a><br />
        <img src={image1} alt="office" />
          </section >
        </>
        )
}

        export default Header