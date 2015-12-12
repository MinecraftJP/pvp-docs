アイテムの自動修復と削除
========================

``<toolrepair>`` タグを定義する事により、アイテムの自動修復を設定する事が出来ます。 一つ以上の ``<tool>`` タグにアイテムを設定します。

.. code-block:: xml

   <toolrepair>
     <tool>diamond pickaxe</tool>
   </toolrepair>

``<itemremove>`` タグを定義する事により、死亡時などにドロップさせたくないアイテムを設定する事が出来ます。 染色済みの防具など相手チームに拾われると混乱を招くものなどに使われます。

.. code-block:: xml

   <itemremove>
	 <item>leather chestplate</item>
     <item>leather leggings</item>
     <item>leather boots</item>
   </itemremove>

