export interface Order {
	name: string;
	orderNumber: number;
	meals: Array<any>;
	price: number;
	paymentType: 'tarjeta' | 'efectivo' | 'tranferencia';
	details: string;
}
