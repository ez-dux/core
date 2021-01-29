## ez-dux/core

Basic module

createActionCreator<'TYPE', PayloadType, MetaType>('TYPE') // returns function(payload: PayloadType, meta: MetaType) {
type: 'Type', payload, meta
}

createSelector<Type, RootState>(...entries) // returns function(state: RootState): Type

Reducer 