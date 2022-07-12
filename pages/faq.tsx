import type { NextPage } from "next";
import Image from "next/image";

const FAQ: NextPage = () => {
  return (
    <div className="max-w-3xl flex flex-col justify-center mx-4">
      <h3 className="mt-96 text-4xl text-center font-bold mb-5">FAQ</h3>

      <div className="">
        <div>
          <h4 className="faq-question">Why did you make this?</h4>
          <p className="faq-answer">
            The purpose of this site is to serve as a response to disingenous
            religious pro-life supporters who call abortion murder. If
            terminating a bundle of cells is murder, then it is important to
            hold the biggest murderer of all accountable, God. With well over a
            million miscarriages a year in the US, God easily kills more unborn
            children than all abortions combined.
          </p>
        </div>
        <div>
          <h4 className="faq-question">Where did these numbers come from?</h4>
          <p className="faq-answer">
            In 2019, the CDC reported{" "}
            <a
              href="https://www.cdc.gov/mmwr/volumes/70/ss/ss7009a1.htm"
              target="_blank"
            >
              629,898
            </a>{" "}
            abortions were performed. An estimated{" "}
            <a
              href="https://www.ncbi.nlm.nih.gov/books/NBK532992/"
              target="_blank"
            >
              26% of pregnancies
            </a>{" "}
            end in miscarriage. With{" "}
            <a
              href="https://www.cdc.gov/nchs/data/vsrr/vsrr020.pdf"
              target="_blank"
            >
              3,659,289 births
            </a>{" "}
            in the US, a 26% pregnancy loss would come to 1,285,696
            misscarriages. Miscarriage only includes losses in the first 20
            weeks gestation. Stillbirths (after 20 weeks) account for an
            additional 24,000,{" "}
            <a
              href="https://www.cdc.gov/ncbddd/stillbirth/facts.html"
              target="_blank"
            >
              according to the CDC
            </a>
            . In total this comes to 1,309,696 abortions by God.
          </p>
        </div>
        <div>
          <h4 className="faq-question">
            Do you really think miscarriages are the same as abortions?
          </h4>
          <p className="faq-answer">
            Not at all. Miscarriages, medically known as spontaneous abortions,{" "}
          </p>
        </div>
        <div>
          <h4 className="faq-question">
            Don't you believe that all life is precious?
          </h4>
          <p className="faq-answer">Test</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
