import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface GlowingButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const GlowingButton = ({
  children,
  className = "",
  type,
  disabled = false,
}: GlowingButtonProps) => {
  return (
    <div className={cn("group relative", className)}>
      <div className="absolute left-0 top-0 h-full w-full blur group-hover:bg-gradient-to-r group-hover:from-[#ebe412b3] group-hover:to-[#68ce8db3] group-active:from-[#ABD84F] group-active:to-[#09C0E9]"></div>
      <Button
        aria-label="button"
        type={type}
        disabled={disabled}
        className="relative h-[45px] md:h-[57px] w-full border-none bg-gradient-to-r from-[#ABD84F] to-[#09C0E9] px-5 text-black hover:from-[#EBE212] hover:to-[#68CE8E] active:from-[#ABD84F] active:to-[#09C0E9]"
      >
        {children}
      </Button>
    </div>
  );
};

export default GlowingButton;
