
## Piano: Animazione zoom-in uniforme per tutte le immagini della galleria

### Cosa cambia
Tutte e tre le immagini avranno la stessa animazione di zoom-in (da `scale-110` a `scale-100`) con timing `ease-in-out`, rimuovendo lo scale speciale che aveva solo la prima immagine.

### Dettagli tecnici

**File: `src/components/Gallery.tsx`** — riga 45

Sostituire la classe condizionale dell'`<img>` con una classe uniforme per tutte le immagini:

```tsx
className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out scale-110 animate-[zoomIn_1.2s_ease-in-out_forwards]"
```

In alternativa, approccio più pulito usando solo il CSS di Tailwind senza keyframe custom:
- Rimuovere `${i === 0 ? "scale-[1.2] object-[center_40%]" : ""}` 
- Applicare a tutte le immagini: `scale-[1.1]` quando non visibili, `scale-100` quando visibili (legato a `gridVisible`)
- Usare `ease-[ease]` (cubic-bezier equivalente) o `ease-in-out` per il timing

**Approccio consigliato** — gestire lo zoom tramite lo stato `gridVisible` già presente:

Riga 42-47, l'img diventa:
```tsx
<img
  src={img.src}
  alt={img.alt}
  className={`w-full h-full object-cover transition-transform duration-1000 ease-in-out ${
    gridVisible ? "scale-100" : "scale-[1.15]"
  }`}
  loading="lazy"
/>
```

Questo dà a tutte e tre le immagini lo stesso effetto zoom-in (da 115% a 100%) con ease-in-out, attivato dallo scroll reveal.
