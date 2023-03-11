import { useSnackbarStore } from '@/store/snackbar';
import { useUserStore } from '@/store/user';
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
// import { useErrorHandle } from '../utils';

export const requestInterceptor = (
	config: InternalAxiosRequestConfig<unknown>
): InternalAxiosRequestConfig<unknown> => {
	// logic here
	return config;
};

export const requestErrorInterceptor = (
	error: unknown
): Promise<InternalAxiosRequestConfig<unknown>> => {
	// logic here
	return Promise.reject(error);
};

export const responseInterceptor = (
	response: AxiosResponse<unknown>
): AxiosResponse<unknown> => {
	// logic here
	return response;
};

export const responseErrorInterceptor = (
	error: unknown
): Promise<AxiosResponse<unknown>> => {
	const { showSnackbar } = useSnackbarStore();
	const { logout } = useUserStore();

	// showSnackbar('error', useErrorHandle(error as AxiosError));
	showSnackbar('error', (error as AxiosError).message);
	switch ((error as AxiosError).response?.status) {
		case 403:
			logout();
			return Promise.reject((error as AxiosError).message);
	}

	return Promise.reject(error);
};
