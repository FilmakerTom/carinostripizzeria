import { useState } from "react";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { CalendarIcon, Clock, Users, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const timeSlots = [
  "12:00", "12:30", "13:00", "13:30", "14:00",
  "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00",
];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

const Reservation = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !guests || !name.trim() || !phone.trim()) {
      toast({
        title: "Compila tutti i campi obbligatori",
        description: "Data, ora, ospiti, nome e telefono sono richiesti.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Prenotazione inviata!",
      description: `Tavolo per ${guests} il ${format(date, "d MMMM yyyy", { locale: it })} alle ${time}. Ti confermeremo a breve.`,
    });
    setDate(undefined);
    setTime("");
    setGuests("");
    setName("");
    setPhone("");
    setNotes("");
  };

  return (
    <section id="prenota" className="py-20 md:py-28 bg-card">
      <div className="max-w-2xl mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl text-center text-foreground mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Prenota un Tavolo
        </h2>
        <p
          className="text-center text-muted-foreground tracking-[0.2em] uppercase text-xs mb-12"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Riserva il tuo posto da Carinostri
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Date */}
            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-widest text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                Data *
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-border",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "d MMM yyyy", { locale: it }) : "Scegli data"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time */}
            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-widest text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                Ora *
              </Label>
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger className="border-border">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Scegli ora" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-widest text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                Ospiti *
              </Label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="border-border">
                  <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="N° persone" />
                </SelectTrigger>
                <SelectContent>
                  {guestOptions.map((n) => (
                    <SelectItem key={n} value={n}>{n} {n === "1" ? "persona" : "persone"}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-widest text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                Nome *
              </Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Il tuo nome"
                className="border-border"
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-widest text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                Telefono *
              </Label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+39 ..."
                type="tel"
                className="border-border"
                maxLength={20}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs uppercase tracking-widest text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
              Note (opzionale)
            </Label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Allergie, preferenze, occasione speciale..."
              className="border-border resize-none"
              rows={3}
              maxLength={500}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 tracking-widest uppercase text-sm py-6"
          >
            <Send className="mr-2 h-4 w-4" />
            Prenota Ora
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
