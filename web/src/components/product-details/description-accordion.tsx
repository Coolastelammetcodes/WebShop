import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { Mug } from "../../types/mug";

type ProductDescriptionProps = {
  mug: Mug
};

export default function DescriptionAccordion({mug}: ProductDescriptionProps) {
  const id = React.useId();
  return (
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel3-content`}
          id={`${id}-panel3-header`}
        >
          <Typography component="span" sx={{textTransform: "capitalize", fontWeight:"bold"}}>Product description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {mug.description}
        </AccordionDetails>
      </Accordion>
  );
}
