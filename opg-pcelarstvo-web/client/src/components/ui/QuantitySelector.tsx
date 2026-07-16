import { Plus, Minus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center inline-flex rounded-lg border border-neutral-200 bg-white p-1">
      <button
        onClick={onDecrease}
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-neutral-100 text-neutral-600 transition-colors"
        aria-label="Smanji količinu"
      >
        <Minus size={16} />
      </button>
      
      <span className="w-10 text-center font-semibold text-neutral-800">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-neutral-100 text-neutral-600 transition-colors"
        aria-label="Povećaj količinu"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}