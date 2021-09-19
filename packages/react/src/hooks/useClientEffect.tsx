import { useEffect, EffectCallback, DependencyList } from "react";

/** ... */
export const useClientEffect = (
  effect: EffectCallback,
  deps: DependencyList
) => {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    return effect() || undefined;
  }, deps)
}
