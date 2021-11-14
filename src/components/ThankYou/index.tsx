import { Styles } from "./Styles";
import { success } from "../../assets";

const ThankYou = () => {
  return (
    <Styles>
      <img src={success} alt="success img" />
      <div className="thank-you-green-box">
         Thank you! <br /> Results are coming soon. Be ready!
      </div>
      <span>Take part in our journey and join our community today!</span>
    </Styles>
  );
};

export default ThankYou;
