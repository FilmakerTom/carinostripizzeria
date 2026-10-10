import type { MenuItem } from "@/data/menuData";

interface Props {
  item: MenuItem;
  className?: string;
  style?: React.CSSProperties;
}

const SeasonalPizzaCard = ({ item, className = "", style }: Props) => (
  <div
    className={`relative overflow-hidden rounded-sm group min-h-[180px] md:min-h-[220px] flex items-end ${className}`}
    style={style}
  >
    {item.image && (
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-foreground/30" />
    <div className="relative z-10 w-full flex justify-between items-end gap-4 p-6">
      <div className="flex-1">
        <h4 className="text-xl md:text-2xl text-background">{item.name}</h4>
        {item.description && <p className="text-background/85 mt-1 text-sm">{item.description}</p>}
      </div>
      <span className="text-xl text-primary font-semibold shrink-0 bg-background/90 px-3 py-1 rounded-sm">
        {item.price}
      </span>
    </div>
  </div>
);

export default SeasonalPizzaCard;
