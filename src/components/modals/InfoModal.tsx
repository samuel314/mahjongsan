import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { useTranslation } from 'react-i18next'
import images from '../../images'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  const { t } = useTranslation()
  return (
    <BaseModal
      title={t('info_title')}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-xl text-gray-500 dark:text-gray-300">
        {t('info_1')}
        <br />
        {t('info_2')}
      </p>

      <p className="text-xl text-green-700 dark:text-green-500">
        {t('info_3')}
        <img className="inline w-[20px]" alt={'1m'} src={images['1m']} />
        {t('comma')}
        <img className="inline w-[20px]" alt={'1p'} src={images['1p']} />
        {t('comma')}
        <img className="inline w-[20px]" alt={'1s'} src={images['1s']} />
        {t('comma')}
        <img className="inline w-[20px]" alt={'1z'} src={images['1z']} />)
        {t('footstop')}
        <br />
        {t('info_4')}
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
      <p className="text-xl text-gray-500 dark:text-gray-300">
        {t('info_tile_begin')}
        <img className="inline w-[20px]" alt={'8s'} src={images['8s']} />
        {t('info_5')}
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
      <p className="text-xl text-gray-500 dark:text-gray-300">
        {t('info_tile_begin')}
        <img className="inline w-[20px]" alt={'5p'} src={images['5p']} />
        {t('info_6')}
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
      <p className="text-xl text-gray-500 dark:text-gray-300">
        {t('info_tile_begin')}
        <img className="inline w-[20px]" alt={'6z'} src={images['6z']} />
        {t('info_7')}
      </p>
    </BaseModal>
  )
}
