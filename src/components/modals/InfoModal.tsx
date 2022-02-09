import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the mahjong hand in 6 tries.
        <br />
        After each guess, the color of the tiles will change to show how close
        your guess was to the hand.
      </p>

      <p className="text-sm text-green-700 dark:text-green-500">
        The hand should have one or more yaku and all tiles are sorted in order
        of numbers and categories(🀇, 🀙, 🀐, 🀀).
        <br />
        Please note that the last tile is a winning tile, so it is not sorted.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="🀇" />
        <Cell value="🀈" />
        <Cell value="🀉" />
        <Cell value="🀜" />
        <Cell value="🀝" />
        <Cell value="🀞" />
        <Cell value="🀖" />
        <Cell value="🀗" status="correct" />
        <Cell value="🀘" />
        <Cell value="🀔" />
        <Cell value="🀅" />
        <Cell value="🀅" />
        <Cell value="🀅" />
        <Cell value="🀔" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The tile 🀗 is in the hand and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="🀇" />
        <Cell value="🀈" />
        <Cell value="🀉" />
        <Cell value="🀜" />
        <Cell value="🀝" status="present" />
        <Cell value="🀞" />
        <Cell value="🀖" />
        <Cell value="🀗" />
        <Cell value="🀘" />
        <Cell value="🀔" />
        <Cell value="🀅" />
        <Cell value="🀅" />
        <Cell value="🀅" />
        <Cell value="🀔" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The tile 🀝 is in the hand but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="🀇" />
        <Cell value="🀈" />
        <Cell value="🀉" />
        <Cell value="🀜" />
        <Cell value="🀝" />
        <Cell value="🀞" />
        <Cell value="🀖" />
        <Cell value="🀗" />
        <Cell value="🀘" />
        <Cell value="🀔" />
        <Cell value="🀅" status="absent" />
        <Cell value="🀅" status="absent" />
        <Cell value="🀅" status="absent" />
        <Cell value="🀔" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The tile 🀅 is not in the hand in any spot.
      </p>
    </BaseModal>
  )
}
