/**
 * ПРОСТОЙ СКРИПТ ДЛЯ УСТАНОВКИ ТЕСТОВОГО ТОКЕНА
 * 
 * ИСПОЛЬЗОВАНИЕ:
 * 1. Откройте консоль браузера (F12)
 * 2. Скопируйте и вставьте весь этот код
 * 3. Нажмите Enter
 * 4. Страница автоматически перезагрузится
 */

(function() {
  console.log('🔧 ========================================');
  console.log('🔧 УСТАНОВКА ТЕСТОВОГО ТОКЕНА');
  console.log('🔧 ========================================');
  
  // Проверяем текущий токен
  const currentToken = localStorage.getItem('token');
  console.log('📋 Текущий токен:', currentToken ? `${currentToken.substring(0, 20)}...` : 'НЕТ');
  
  // Устанавливаем тестовый токен
  const testToken = 'test-token-for-development';
  const testUser = {
    id: 1,
    telegramId: '999999999',
    firstName: 'Тестовый',
    lastName: 'Пользователь',
    username: 'test_user',
    isAdmin: true,
    isActive: true
  };
  
  localStorage.setItem('token', testToken);
  localStorage.setItem('user', JSON.stringify(testUser));
  
  // Проверяем, что токен установлен
  const verifyToken = localStorage.getItem('token');
  const verifyUser = localStorage.getItem('user');
  
  console.log('✅ Токен установлен:', verifyToken);
  console.log('✅ Пользователь установлен:', verifyUser ? JSON.parse(verifyUser) : 'НЕТ');
  
  if (verifyToken === testToken) {
    console.log('✅ УСПЕХ! Токен сохранен в localStorage');
    console.log('🔄 Перезагружаем страницу через 1 секунду...');
    
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } else {
    console.error('❌ ОШИБКА! Токен не был сохранен');
    console.error('Попробуйте выполнить вручную:');
    console.error('localStorage.setItem("token", "test-token-for-development")');
  }
})();

