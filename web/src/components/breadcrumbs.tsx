import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

interface BreadcrumbsProps {
  currentPage: string;
}

export default function Breadcrumbs({ currentPage }: BreadcrumbsProps) {
  return (
    <MuiBreadcrumbs>
      <Link href="/">Home</Link>
      <span>{currentPage}</span>
    </MuiBreadcrumbs>
  );
}
