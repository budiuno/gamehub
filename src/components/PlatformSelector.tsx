import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'

interface PlatformSelectorProps {
    onSelectParentPlatform: (platform: Platform) => void;
    selectedParentPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectParentPlatform, selectedParentPlatform }: PlatformSelectorProps) => {
    const { data } = usePlatforms();
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedParentPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem onClick={() => onSelectParentPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector