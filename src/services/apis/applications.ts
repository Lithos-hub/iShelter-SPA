import { useQuery } from 'vue-query';
import { Api } from '@/services/config';
import { Application } from '@/models';
import { useSnackbarStore } from '@/store';

const API = new Api();

export const useApplicationsQuery = () =>
	useQuery('applications', () => {
		const { showSnackbar } = useSnackbarStore();
		try {
			return API.get<Application[]>('/applications');
		} catch (error: unknown) {
			// showSnackbar('error', useErrorHandle(error as AxiosError));
			showSnackbar('error', error as string);
		}
	});
