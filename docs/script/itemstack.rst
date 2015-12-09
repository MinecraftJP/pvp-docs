
ItemStack
#############

新規ItemStackオブジェクトを作成するには ``createItemStack()`` を呼び出します。

.. code-block:: javascript

   var item = createItemStack();
   item.setType('DIAMOND_HOE');

.. js:class:: ItemStack()

   **メソッド**

   .. function:: getType()

      タイプを取得します。

      :returns: String (Material)

   .. function:: setType(type)

      タイプを設定します。

      :param string type: タイプ (Material)

      :returns: void

   .. function:: getData()

      データ値を取得します。

      :returns: Number

   .. function:: setData(data)

      データ値を設定します。

      :param Number data: データ値

      :returns: void

   .. function:: getName()

      アイテム名を取得します。

      :returns: String

   .. function:: setName(name)

      アイテム名を設定します。

      :param string name: アイテム名

      :returns: void

   .. function:: getLore()

      アイテムの説明を取得します。

      :returns: Array[string]

   .. function:: setLore(lore)

      アイテムの説明を設定します。

      :param array[string] type: 説明

      :returns: void

   .. function:: addEnchantment(enchantment, level)

      アイテムにエンチャントを付与します。

      :param string enchantment: エンチャント名
      :param Number level: レベル

      :returns: void

   .. function:: clearEnchantments()

      アイテムからエンチャントを削除します。

      :returns: void