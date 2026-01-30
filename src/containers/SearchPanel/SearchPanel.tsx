import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material'
import classes from './SearchPanel.module.css'

export function SearchPanel() {
  return (
    <section className={classes.searchPanel}>
      <input></input>
      <div>
        <select
          className={classes.searchPanel__select}
          name="city"
          id="city-select"
        >
          <option value="">-- Выберите город --</option>
          <option value="petersburg">Санкт-Петербург</option>
          <option value="samara">Самара</option>
          <option value="perm">Пермь</option>
          <option value="novosibirsk">Новосибирск</option>
        </select>

        <FormControl>
          <Select
            className={classes.searchPanel__select}
            value={10}
            // onChange={handleChange}
            displayEmpty
            // inputProps={{ 'aria-label': 'Without label' }}
            // sx={{ fontFamily: 'inherit' }}
          >
            <MenuItem className={classes.searchPanel__option} value="">
              <em>None</em>
            </MenuItem>
            <MenuItem className={classes.searchPanel__option} value={10}>
              Ten
            </MenuItem>
            <MenuItem className={classes.searchPanel__option} value={20}>
              Twenty
            </MenuItem>
            <MenuItem className={classes.searchPanel__option} value={30}>
              Thirty
            </MenuItem>
          </Select>
          <FormHelperText>Without label</FormHelperText>
        </FormControl>

        <select
          className={classes.searchPanel__select}
          name="city"
          id="city-select"
        >
          <option value="">-- Выберите город --</option>
          <option value="petersburg">Санкт-Петербург</option>
          <option value="samara">Самара</option>
          <option value="perm">Пермь</option>
          <option value="novosibirsk">Новосибирск</option>
        </select>

        <select
          className={classes.searchPanel__select}
          name="city"
          id="city-select"
        >
          <option value="">-- Выберите город --</option>
          <option value="petersburg">Санкт-Петербург</option>
          <option value="samara">Самара</option>
          <option value="perm">Пермь</option>
          <option value="novosibirsk">Новосибирск</option>
        </select>
      </div>
    </section>
  )
}
