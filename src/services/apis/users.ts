import { useQuery } from 'vue-query';
import { Api } from '@/services/config';
import { User } from '@/models';
import { useSnackbarStore } from '@/store/Snackbar';
// import { useErrorHandle } from '../utils';
// import { AxiosError } from 'axios';

const API = new Api();

export const useUsersQuery = () =>
	useQuery('users', () => {
		const { showSnackbar } = useSnackbarStore();
		try {
			return API.get<User[]>('/users');
		} catch (error: unknown) {
			// showSnackbar('error', useErrorHandle(error as AxiosError));
			showSnackbar('error', error as string);
		}
	});
