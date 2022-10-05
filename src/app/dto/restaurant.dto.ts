import { Evaluation } from "./evaluation.dto";

export interface Restaurant {

    id: string;
    nom: string;
    adresse: string;
    evaluations: Evaluation[];
    moyenne: string;

}