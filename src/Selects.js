import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import CorporateFareTwoToneIcon from '@mui/icons-material/CorporateFareTwoTone';
import RotateRightTwoToneIcon from '@mui/icons-material/RotateRightTwoTone';
import BlurOnTwoToneIcon from '@mui/icons-material/BlurOnTwoTone';
import LabelIcon from '@mui/icons-material/Label';

export const forOverview = (
  <React.Fragment>
      <FormControl sx={{ ml: 8, minWidth: 200 }} variant= "standard">
        {/* <InputLabel htmlFor="grouped-native-select">Select portfolio</InputLabel> */}
        <Select native defaultValue="" id="grouped-native-select" label="Select portfolio" disableUnderline startAdornment={
            <InputAdornment position="start">
              <RotateRightTwoToneIcon style={{ color: "#00bcd4"}}/>
            </InputAdornment>
          }
          style={{
            borderRadius: 25,
            backgroundColor: "#031c4a",
            padding: "6px 15px",
        }}>
          <option aria-label="None" value="">Select portfolio</option>
          <optgroup label="Category 1">
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ ml: 3, minWidth: 200 }} variant= "standard">
        {/* <InputLabel htmlFor="grouped-select">Select building</InputLabel> */}
        <Select native defaultValue="" id="grouped-native-select" label="Select building" disableUnderline startAdornment={
            <InputAdornment position="start">
              <CorporateFareTwoToneIcon style={{ color: "#00bcd4"}}/>
            </InputAdornment>
          }
          style={{
            borderRadius: 25,
            backgroundColor: "#031c4a",
            padding: "6px 15px",
        }}>
          <option aria-label="None" value="">Select building</option>
          <optgroup label="Category 1">
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem> */}
        </Select>
      </FormControl>
      <FormControl sx={{ ml: 3, minWidth: 200 }} variant= "standard">
        {/* <InputLabel htmlFor="grouped-select">Select strata</InputLabel> */}
        <Select native defaultValue="" id="grouped-native-select" label="Select strata" disableUnderline startAdornment={
            <InputAdornment position="start">
              <BlurOnTwoToneIcon style={{ color: "#00bcd4"}}/>
            </InputAdornment>
          }
          style={{
            borderRadius: 25,
            backgroundColor: "#031c4a",
            padding: "6px 15px",
        }}>
          <option aria-label="None" value="">Select building</option>
          <optgroup label="Category 1">
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem> */}
        </Select>
      </FormControl>
  </React.Fragment>
)

export const forML = (
  <React.Fragment>
      <FormControl sx={{ ml: 8, minWidth: 200 }} variant= "standard">
        {/* <InputLabel htmlFor="grouped-native-select">Select portfolio</InputLabel> */}
        <Select native defaultValue="" id="grouped-native-select" label="Select feature1" disableUnderline startAdornment={
            <InputAdornment position="start">
              <LabelIcon style={{ color: "#00bcd4"}}/>
            </InputAdornment>
          }
          style={{
            borderRadius: 25,
            backgroundColor: "#031c4a",
            padding: "6px 15px",
        }}>
          <option aria-label="None" value="">Select feature1</option>
          <optgroup label="Category 1">
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ ml: 3, minWidth: 200 }} variant= "standard">
        {/* <InputLabel htmlFor="grouped-select">Select building</InputLabel> */}
        <Select native defaultValue="" id="grouped-native-select" label="Select feature2" disableUnderline startAdornment={
            <InputAdornment position="start">
              <LabelIcon style={{ color: "#00bcd4"}}/>
            </InputAdornment>
          }
          style={{
            borderRadius: 25,
            backgroundColor: "#031c4a",
            padding: "6px 15px",
        }}>
          <option aria-label="None" value="">Select feature2</option>
          <optgroup label="Category 1">
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ ml: 3, minWidth: 200 }} variant= "standard">
        {/* <InputLabel htmlFor="grouped-select">Select strata</InputLabel> */}
        <Select native defaultValue="" id="grouped-native-select" label="Select feature3" disableUnderline startAdornment={
            <InputAdornment position="start">
              <LabelIcon style={{ color: "#00bcd4"}}/>
            </InputAdornment>
          }
          style={{
            borderRadius: 25,
            backgroundColor: "#031c4a",
            padding: "6px 15px",
        }}>
          <option aria-label="None" value="">Select feature3</option>
          <optgroup label="Category 1">
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ ml: 3, minWidth: 200 }} variant= "standard">
        {/* <InputLabel htmlFor="grouped-select">Select strata</InputLabel> */}
        <Select native defaultValue="" id="grouped-native-select" label="Select feature4" disableUnderline startAdornment={
            <InputAdornment position="start">
              <LabelIcon style={{ color: "#00bcd4"}}/>
            </InputAdornment>
          }
          style={{
            borderRadius: 25,
            backgroundColor: "#031c4a",
            padding: "6px 15px",
        }}>
          <option aria-label="None" value="">Select feature4</option>
          <optgroup label="Category 1">
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
        </Select>
      </FormControl>
  </React.Fragment>
)