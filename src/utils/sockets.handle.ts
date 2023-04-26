import { io } from '../app';

const emitOrder = (data: any) => {
	io.emit(
		'order',
		{
			body: data,
		},
		console.log('Enviado')
	);
};

export { emitOrder };
