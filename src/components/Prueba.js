import Lottie from "lottie-react";
import groovyWalkAnimation from "./animacion/data.json";

const Example = () => {
  return (
      <>
        <div id="lottie-wrapper">
            <Lottie animationData={groovyWalkAnimation}  />;
        </div>
      </>
  )
};
export default Example;