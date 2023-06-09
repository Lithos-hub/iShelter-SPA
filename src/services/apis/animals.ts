import { useQuery } from 'vue-query';
import { Api } from '@/services/config';
import { Animal } from '@/models';
import { useSnackbarStore } from '@/store';
// import { useErrorHandle } from '../utils';
// import { AxiosError } from 'axios';

const API = new Api();

export const useAnimalsQuery = () =>
	useQuery('animals', () => {
		const { showSnackbar } = useSnackbarStore();
		try {
			return API.get<Animal[]>('/animals');
		} catch (error: unknown) {
			// showSnackbar('error', useErrorHandle(error as AxiosError));
			showSnackbar('error', error as string);
		}
	});
