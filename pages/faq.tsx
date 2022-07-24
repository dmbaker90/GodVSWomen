import type { NextPage } from "next";
import Image from "next/image";

const FAQ: NextPage = () => {
  return (
    <div className="max-w-3xl flex flex-col justify-center mx-4 mb-20">
      <h3 className="mt-96 text-4xl text-center font-bold mb-5">FAQ</h3>

      <div className="">
        <div>
          <h4 className="faq-question">Why did you make this?</h4>
          <p className="faq-answer">
            The purpose of this site is to serve as a response to the
            disingenuous, religious pro-life premise that abortion is murder. If
            terminating a bundle of cells after conception is murder, then it is
            important to hold the biggest murderer of all accountable, God. With
            well over a million miscarriages a year in the US, God easily kills
            more unborn children than all abortions combined.
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
            miscarriages. Miscarriage only includes losses in the first 20 weeks
            gestation. Stillbirths (after 20 weeks) account for an additional
            24,000,{" "}
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
            No, but it is difficult to not see the parallels. Miscarriage is,
            medically, called spontaneous abortion.{" "}
            <a
              href="https://www.cdc.gov/mmwr/volumes/70/ss/ss7009a1.htm#T12_up"
              target="_blank"
            >
              80% of abortions are performed in the first 10 weeks.
            </a>{" "}
            This is about consistent with{" "}
            <a
              href="https://www.ncbi.nlm.nih.gov/books/NBK532992/"
              target="_blank"
            >
              80% of miscarriages occurring in the first 12 weeks.
            </a>{" "}
            Abortion procedures and medications are{" "}
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7403257/"
              target="_blank"
            >
              nearly identical
            </a>{" "}
            to those of miscarriages, and new abortion laws{" "}
            <a
              href="https://www.nytimes.com/2022/07/17/health/abortion-miscarriage-treatment.html"
              target="_blank"
            >
              strongly affect
            </a>{" "}
            miscarriage treatment.
          </p>
        </div>
        <div>
          <h4 className="faq-question">
            Don't you believe that all life is precious?
          </h4>
          <p className="faq-answer">
            Yes, I do. And from that it follows that the death penalty should be
            abolished, and guns should be very heavily regulated or banned. The
            problem comes from the decision that life begins at conception,
            which has no scientific consensus or even religious consensus.
            Pastor John A. Nelson calls the decision{" "}
            <a
              href="https://www.berkshireeagle.com/opinion/columnists/john-a-nelson-a-pastors-perspective-on-roes-repeal/article_94fc2980-0440-11ed-b6db-c7482aa7f417.html"
              target="_blank"
            >
              immoral
            </a>{" "}
            and that the "concern for the lives of fetuses" is a "denial of
            fullness of life for women in our country". It is purely an
            ideological belief by a minority few. A bundle of cells with DNA
            instructions to assemble a human is no more a human than an
            instruction manual and a pile of sheet metal is a car. It's clear
            that on the assembly line, at some point the materials become a car.
            It's also clear that it's not at conception, and the effects of
            inflicting that belief upon others have profoundly negative
            consequences for women and for bodily autonomy.
          </p>
        </div>
        <div>
          <h4 className="faq-question">What do you mean bodily autonomy?</h4>
          <p className="faq-answer">
            If you die, no government or hospital may use any of your organs
            without your pre-approval, <i>even to save another life.</i> This is
            bodily autonomy, even dead people have it. This basic dignity goes
            against the pro-life premise. Now imagine that you are not dead, but
            alive, and have a spare kidney that can be used to save the life of
            a child,{" "}
            <a
              target="_blank"
              href="https://www.seattlechildrens.org/clinics/transplant/kidney/kidney-organ-donation/"
            >
              which you do.
            </a>{" "}
            If the pro-life premise were not hypocritical and disingenuous, they
            would support the government forcing you to have an unwanted surgery
            to save another life. Obviously, this is not the case, but they are
            happy to impose these beliefs upon others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
