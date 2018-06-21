//Não precisamos criar uma classe, apenas uma representação dos dados. Para isso as interfaces são muito uteis.
//Não é obrigado a criar essa interface, somente para melhorar a representação
export interface Restaurant {

    id: string;
    name: string;
    category: string;
    deliveryEstimate: string;
    rating: number;
    imagePath: string;

}