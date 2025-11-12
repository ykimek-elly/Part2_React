import "./ScssEx실습.scss";

export default function ScssEx실습() {
  return (
    <div className="container">
        {/* top-nav */}
        <div className="top-nav">
            <span>logo</span>
            <nav>
              <ul>
                <li>mune1</li>
                <li>mune2</li>
                <li>mune3</li>
                <li><button>1</button></li>
                <li><button>2</button></li>
              </ul>
            </nav>
        </div>
        {/* section-1 */}
        <div className="">
           <h1> Welcome Back, Jane!</h1>
           <p>Your Weekly Gask 65% Complete</p>
            <div>
                <h5>title</h5>
                <img src="" alt="" />
                <div>
                    <p>Maskeing Resct Hooks</p>
                    <p>65%</p>
                    <div>

                    </div>
                </div>
            </div>
            <div></div>
            <div>
                <h5>Upcoming Deadines</h5>
                <div>
                    <img src="" alt="" />
                    <p>Project1-Due Friday</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Quiz 3 - Due manday</p>
                </div>
            </div>
        </div>
        {/* section-2 */}
        <div>
            <h3> My Courses</h3>
            <div>
                <div className="card">
                    <ul>
                        <li><img src="" alt="" /></li>
                        <li>
                            <div>
                                <p>Adumced CSS Animnions</p>
                                <p>
                                    <span>63%</span>
                                    <button>Process</button>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>


    </div>
  )
}
