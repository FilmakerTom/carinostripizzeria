import { useState } from "react";
import type { MenuItem } from "@/data/menuData";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface Props {
  item: MenuItem;
  className?: string;
  style?: React.CSSProperties;
}

const SeasonalPizzaCard = ({ item, className = "", style }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        role={item.image ? "button" : undefined}
        tabIndex={item.image ? 0 : undefined}
        aria-label={item.image ? `Ingrandisci foto ${item.name}` : undefined}
        onClick={() => item.image && setOpen(true)}
        onKeyDown={(e) => item.image && (e.key === "Enter" || e.key === " ") && setOpen(true)}
        className={`relative overflow-hidden rounded-2xl bg-foreground shadow-lg ring-1 ring-border/40 group min-h-[200px] md:min-h-[240px] flex items-end ${item.image ? "cursor-zoom-in" : ""} ${className}`}
        style={style}
      >
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            style={{ objectPosition: item.imagePosition ?? "center" }}
            className="absolute inset-0 w-full h-full object-cover opacity-75 transition-all group-hover:opacity-90 duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/35 to-transparent" />
        <div className="relative z-10 w-full flex justify-between items-end gap-4 p-6 md:p-8">
          <div className="flex-1">
            <h4 className="text-2xl md:text-3xl font-normal tracking-wide text-background">{item.name}</h4>
            {item.description && <p className="text-background/80 mt-2 text-sm italic">{item.description}</p>}
          </div>
          <span className="text-xl text-primary font-semibold shrink-0 bg-background/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-md">
            {item.price}
          </span>
        </div>
      </div>
      {item.image && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-4xl w-[95vw] p-2 sm:p-3 rounded-2xl">
            <DialogTitle className="sr-only">{item.name}</DialogTitle>
            <DialogDescription className="sr-only">{item.description}</DialogDescription>
            <img src={item.image} alt={item.name} className="w-full max-h-[80vh] object-contain rounded-xl" />
            <div className="px-2 pb-2 pt-1">
              <h4 className="text-xl md:text-2xl tracking-wide">{item.name} <span className="text-primary font-semibold">{item.price}</span></h4>
              {item.description && <p className="text-muted-foreground text-sm italic mt-1">{item.description}</p>}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default SeasonalPizzaCard;
