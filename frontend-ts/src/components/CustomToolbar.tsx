import { FC, ChangeEvent } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, ToggleButtonGroup, ToggleButton, InputAdornment, Toolbar } from '@mui/material';
import { MdViewModule, MdList } from "react-icons/md";

interface CustomToolbarProps {
    selectedStatus: string;
    handleStatusChange: (value: string) => void;
    searchTerm: string;
    handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
    viewMode: string;
    handleViewModeChange: (value: string) => void;
}

const statusOptions = [
    { value: "", label: "all" },
    { value: "online", label: "Online" },
    { value: "offline", label: "Offline" },
    { value: "inprogress", label: "In progress" },
];

const CustomToolbar: FC<CustomToolbarProps> = ({
    selectedStatus,
    handleStatusChange,
    searchTerm,
    handleSearchChange,
    viewMode,
    handleViewModeChange,
}) => {
    return (
        <Toolbar style={{ marginBottom: '20px' }}>
            <FormControl fullWidth>
                <InputLabel>Fitler by status</InputLabel>
                <Select
                    label="Search by status"
                    variant="outlined"
                    value={selectedStatus}
                    onChange={(_event, value) => handleStatusChange(value)}
                    sx={{ minWidth: '150px' }}
                >
                    {statusOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                id="search-bar"
                label="Search by name"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{ minWidth: '330px' }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <ToggleButtonGroup
                                value={viewMode}
                                exclusive
                                onChange={(_event, value) => handleViewModeChange(value)}
                            >
                                <ToggleButton value="module" aria-label="module">
                                    <MdViewModule />
                                </ToggleButton>
                                <ToggleButton value="list" aria-label="list">
                                    <MdList />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </InputAdornment>
                    )
                }}
            />
        </Toolbar>
    );
};

export default CustomToolbar;
