import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='jh-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
/*const plantList = [
    'Monstera',
    'Ficus Lyrata',
    'Silver Pothos',
    'Yucca',
    'Palm'
]

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{plant}</li>
            ))}
        </ul>
    )
}

export default ShoppingList */