import type { MenuItem } from "@/data/menuData";

interface Props {
  item: MenuItem;
  className?: string;
  style?: React.CSSProperties;
}

const SeasonalPizzaCard = ({ item, className = "", style }: Props) => (
  <div
    className={`relative overflow-hidden rounded-2xl bg-foreground shadow-lg ring-1 ring-border/40 group min-h-[200px] md:min-h-[240px] flex items-end ${className}`}
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
);

export default SeasonalPizzaCard;
