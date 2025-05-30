// Утилита для массового обновления ID в product.data.ts
const fs = require('fs')

const filePath =
	'/Users/magomedsoltan/Desktop/code/проекты/Euphoria/Euphoria-back/seeder/product.data.ts'

// Актуальные ID из базы данных
const actualIds = {
	categories: {
		Tops: 'cmbaxlga20000c975140xqaab',
		'Printed T-shirts': 'cmbaxlga30001c975gubnw81v',
		'Plain T-shirts': 'cmbaxlga30002c9751jyqb7dp',
		Kurti: 'cmbaxlga30003c97512xh9vgy',
		Boxers: 'cmbaxlga30004c975pbp1rlnz',
		'Full sleeve T-shirts': 'cmbaxlga30005c975nqscjpuv',
		Joggers: 'cmbaxlga30006c9752v6vn5tw',
		Payjamas: 'cmbaxlga30007c975vij3yvo2',
		Shirts: 'cmbaxlga30008c9750j44nab1',
		'Polo T-Shirt': 'cmbaxlga30009c975ctgtjggd',
		'Hoodies & Sweatshirt': 'cmbaxlga3000ac975gkvex42g',
		Jeans: 'cmbaxlga3000bc975fhqvlni0',
		Activewear: 'cmbaxlga3000cc975ajgmalmr',
		'Coats & Parkas': 'cmbaxlga3000dc975as9g6buv',
		'Tees & T-Shirt': 'cmbaxlga3000ec975b8p5r7xc'
	},
	colors: {
		Purple: 'cmbaxl03a0000c909om9r1nse',
		Black: 'cmbaxl03b0001c909xonlylsn',
		Red: 'cmbaxl03b0002c909ypzpaczy',
		Orange: 'cmbaxl03b0003c9091qzoql3z',
		Navy: 'cmbaxl03b0004c9097b29s9xr',
		White: 'cmbaxl03b0005c9091kfpv8f1',
		Brown: 'cmbaxl03b0006c909rbn1vaq6',
		Green: 'cmbaxl03b0007c909ws2a7yi2',
		Yellow: 'cmbaxl03b0008c909vgc0kk90',
		Grey: 'cmbaxl03b0009c90913roxw78',
		Pink: 'cmbaxl03b000ac909z3s8i3ja',
		'Blue Purple': 'cmbaxl03b000bc909r2lwuyvo'
	},
	sizes: {
		XXS: 'cmbaxl8bd0000c93xzlnofjr6',
		XS: 'cmbaxl8bd0001c93x1utnk869',
		S: 'cmbaxl8bd0002c93xxognwdtu',
		M: 'cmbaxl8bd0003c93xn10b41wr',
		L: 'cmbaxl8bd0004c93xz3vwzt78',
		XL: 'cmbaxl8bd0005c93xec235sa3',
		XXL: 'cmbaxl8bd0006c93x0dpsfmj7',
		'3XL': 'cmbaxl8bd0007c93xj5oyujvq',
		'4XL': 'cmbaxl8bd0008c93xd6f2en48'
	},
	dressStyles: {
		Classic: 'cmbaxlmyj0000c99vgq7ssuru',
		Casual: 'cmbaxlmyj0001c99vh7fqwdzv',
		Business: 'cmbaxlmyj0002c99vkz3tzumf',
		Sport: 'cmbaxlmyj0003c99vxi5gzt1e',
		Elegant: 'cmbaxlmyj0004c99vt98d8udr',
		'Formal Evening': 'cmbaxlmyj0005c99vofgehrq3'
	}
}

// Читаем файл
let content = fs.readFileSync(filePath, 'utf8')

// Заменяем все старые ID на случайные новые актуальные ID из соответствующих категорий
const oldIds = [
	/cm4[\w-]+/g // Все старые ID начинающиеся с cm4
]

// Функция для получения случайного ID из массива
function getRandomId(type) {
	const ids = Object.values(actualIds[type])
	return ids[Math.floor(Math.random() * ids.length)]
}

// Заменяем ID категорий
content = content.replace(/category: { connect: { id: '[^']+' } }/g, () => {
	return `category: { connect: { id: '${getRandomId('categories')}' } }`
})

// Заменяем ID стилей одежды
content = content.replace(/dressStyle: { connect: { id: '[^']+' } }/g, () => {
	return `dressStyle: { connect: { id: '${getRandomId('dressStyles')}' } }`
})

// Заменяем ID цветов
content = content.replace(/{ color: { connect: { id: '[^']+' } } }/g, () => {
	return `{ color: { connect: { id: '${getRandomId('colors')}' } } }`
})

// Заменяем ID размеров
content = content.replace(/{ size: { connect: { id: '[^']+' } } }/g, () => {
	return `{ size: { connect: { id: '${getRandomId('sizes')}' } } }`
})

// Записываем обновленный файл
fs.writeFileSync(filePath, content)

console.log('✅ Файл product.data.ts успешно обновлен с актуальными ID')
