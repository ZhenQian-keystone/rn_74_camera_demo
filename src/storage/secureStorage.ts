import * as SecureStore from 'expo-secure-store';

// 定义可以存储的键
enum SecureStorageKeys {
  USERNAME = 'username',
  PASSWORD = 'password',
  EMAIL = 'email',
  TOKEN = 'token',
}

type SecureStorageKeyTypes = `${SecureStorageKeys}`;

// 定义存储的账户结构
interface SecureAccount {
  username: string;
  password: string;
  email: string;
}

// 创建（增加）
export const storeSecureItem = async (key: SecureStorageKeyTypes, value: string): Promise<void> => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.error('存储失败:', error);
    throw error;
  }
};

// 读取（查询）
export const getSecureItem = async (key: SecureStorageKeyTypes): Promise<string | null> => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.error('读取失败:', error);
    throw error;
  }
};

// 更新
export const updateSecureItem = async (key: SecureStorageKeyTypes, value: string): Promise<void> => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.error('更新失败:', error);
    throw error;
  }
};

// 删除
export const deleteSecureItem = async (key: SecureStorageKeyTypes): Promise<void> => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error('删除失败:', error);
    throw error;
  }
};

// 存储完整账户信息
export const storeSecureAccount = async (account: SecureAccount): Promise<void> => {
  try {
    await Promise.all([
      storeSecureItem(SecureStorageKeys.USERNAME, account.username),
      storeSecureItem(SecureStorageKeys.PASSWORD, account.password),
      storeSecureItem(SecureStorageKeys.EMAIL, account.email),
    ]);
  } catch (error) {
    console.error('存储账户失败:', error);
    throw error;
  }
};

// 获取完整账户信息
export const getSecureAccount = async (): Promise<SecureAccount | null> => {
  try {
    const [username, password, email] = await Promise.all([
      getSecureItem(SecureStorageKeys.USERNAME),
      getSecureItem(SecureStorageKeys.PASSWORD),
      getSecureItem(SecureStorageKeys.EMAIL),
    ]);

    if (username && password && email) {
      return { username, password, email };
    }
    return null;
  } catch (error) {
    console.error('获取账户失败:', error);
    throw error;
  }
};

// 删除账户
export const deleteSecureAccount = async (): Promise<void> => {
  try {
    await Promise.all([
      deleteSecureItem(SecureStorageKeys.USERNAME),
      deleteSecureItem(SecureStorageKeys.PASSWORD),
      deleteSecureItem(SecureStorageKeys.EMAIL),
    ]);
  } catch (error) {
    console.error('删除账户失败:', error);
    throw error;
  }
};
