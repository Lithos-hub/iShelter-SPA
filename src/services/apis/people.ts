import { useQuery } from 'vue-query';
import { Api } from '@/services/config';
import { Person } from '@/models';
import { useSnackbarStore } from '@/store';
// import { useErrorHandle } from '../utils';
// import { AxiosError } from 'axios';

const API = new Api();

export const usePeopleQuery = () =>
	useQuery('people', () => {
		const { showSnackbar } = useSnackbarStore();
		try {
			return API.get<Person[]>('/people');
		} catch (error: unknown) {
			// showSnackbar('error', useErrorHandle(error as AxiosError));
			showSnackbar('error', error as string);
		}
	});
