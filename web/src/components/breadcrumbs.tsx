import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function Breadcrumbs() {
  return (
    <MuiBreadcrumbs>
      <Link href="/">Home</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/shopping-cart">Shopping Cart</Link>
    </MuiBreadcrumbs>
  );
}
