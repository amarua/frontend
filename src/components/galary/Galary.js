import doctor from './galaryimg/doctor.jpg';
import './galarystyle.css';
function Galary() {
    let t=document.querySelectorAll(".box-for-galary");
    for(let i=0;i<t.length;i++){
        t[i].onmouseover = function() {
        this.children[1].style.transform = "translateX(0px)";
        this.children[0].style.transform = "translateX(0px)";
        }
    }
    for(let i=0;i<t.length;i++){
        t[i].onmouseleave = function() {
        this.children[1].style.transform = "translateX(-20px)";
        this.children[0].style.transform = "translateX(-250px)";
        }
    }
  return (
    <div className="Galary">
            <div className="galary">
            <div className="content-for-galary">
                <div className="box-for-galary" id="box">
                    <div className="text-box">
                        We have Gynecologist
                    </div>
                    <div className="image-box" id="img1">
                       
                    </div>
                </div>
                <div className="box-for-galary">
                    <div className="text-box">
                        We have Advisors
                    </div>
                    <div className="image-box" id="img2">
                        
                    </div>
                </div>
                <div className="box-for-galary">
                    <div className="text-box">
                        We Have Cook
                    </div>
                    <div className="image-box" id="img3">
                        
                    </div>
                </div>
                <div className="box-for-galary">
                    <div className="text-box">
                        We Have Teachers
                    </div>
                    <div className="image-box" id="img4">
                        
                    </div>
                </div>
                <div className="box-for-galary">
                    <div className="text-box">
                        We Have Artists
                    </div>
                    <div className="image-box" id="img5">
                        
                    </div>
                </div>
                <div className="box-for-galary">
                    <div className="text-box">
                        We have Different Type of Workers
                    </div>
                    <div className="image-box"  id="img6">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Galary;