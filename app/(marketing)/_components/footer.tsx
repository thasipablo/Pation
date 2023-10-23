import { Button } from "@/components/ui/button";
import Logo from "./logo";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-full p-6 bg-background z-50">
        <Logo />
        <div className="md:ml-auto flex justify-between md:justify-en items-center gap-x-2 text-muted-foreground">
          <Button variant="ghost" size="sm">
            Privacy Policy
          </Button>
          <Button variant="ghost" size="sm">
            Terms & Conditions
          </Button>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;