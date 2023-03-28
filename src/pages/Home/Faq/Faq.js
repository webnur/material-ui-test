import { Box } from "@mui/system";
import React from "react";
import CreativeAccordion from "../../../components/CreativeAccordion/CreativeAccordion";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const questions = [
    {
        title: 'How do I pay for the Essentials or Premium plan?',
        description: 'You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
    },
    {
        title: 'How do I pay for the Essentials or Premium plan?',
        description: 'You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
    },
    {
        title: 'How do I pay for the Essentials or Premium plan?',
        description: 'You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
    },
    {
        title: 'How do I pay for the Essentials or Premium plan?',
        description: 'You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
    },
]

const Faq = () => {
  return (
    <Box
    sx={{
        mb: 8,
        display: 'flex',
        flexDirection: 'column',
        columnGap: 2,
     }}
    >
      <SectionTitle title="Frequently asked" colored="question" />

      <Box sx={{
        mt: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
        }} >
        {
            questions.map((question, i) => <CreativeAccordion key={i} title={question.title} description={question.description} />)
        }
        
      </Box>
    </Box>
  );
};

export default Faq;
