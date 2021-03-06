import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import elementVariables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'

export interface ISettingState {
    theme: string
    sidebarTextTheme: boolean
}

@Module({ dynamic: true, store, name: 'settings' })
class Settings extends VuexModule implements ISettingState {
    public theme = elementVariables.theme
    public sidebarTextTheme = defaultSettings.sidebarTextTheme

    @Mutation
    private CHANGE_SETTING(payload: { key: string, value: any }) {
        const { key, value } = payload
        if (Object.prototype.hasOwnProperty.call(this, key)) {
            (this as any)[key] = value
        }
    }

    @Action
    public changeSetting(payload: {key: string, value: any}){
        this.CHANGE_SETTING(payload)
    }
}

export const SettingsModule = getModule(Settings)