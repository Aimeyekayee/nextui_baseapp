import { useTranslations } from "next-intl";

const useContenti18n = () => {
  const p = useTranslations("page");

  const faqs = [
    {
      title: p("home.accordion.accordion_item_1.topic"),
      label: "Go to E-Learning",
      content: "Content for eLearning",
      url: "/e-learning",
    },
    {
      title: p("home.accordion.accordion_item_2.topic"),
      content: "Content for Training Record",
      label: "Go to Training Record",
      url: "/training-record",
    },
    {
      title: p("home.accordion.accordion_item_3.topic"),
      content: "Content for Visualize Manufacturing Skills",
      label: "Go to VM",
      url: "/vmskill",
    },
  ];

  return { faqs };
};

export default useContenti18n;
