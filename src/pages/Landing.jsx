import Header from "../components/Header";
import Card from "../components/Card";
import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom"


function Landing() {
const data = useLocation()

  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/*Header */}
        <Header name={data.state.user}/>

        {/*Card */}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Puducherry"} />
          <Card bgcolor={"#FD6663"} title={"March 12"} subtitle={"12:30:03"} />
          <Card bgcolor={"#FCA201"} title={"Built Using"} sutitle={"React"} />
        </div>

        {/*Todo Container*/}
        <Todocontainer />

      </div>

    </div>
  );
}

export default Landing;
