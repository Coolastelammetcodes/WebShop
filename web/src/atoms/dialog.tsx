import { atom } from "jotai";
import type { Mug } from "../types/mug";

export const addMugDialogOpenAtom = atom(false);
export const editMugDialogOpenAtom = atom(false);
export const selectedMugAtom = atom<(Mug & { id: number }) | null>(null);
