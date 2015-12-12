クラス
======
クラスはゲーム開始時にプレイヤーにどのようなキットを使用するか選択させる事が出来ます。

クラスを指定しているマップでは通常のチーム選択ツールの代わりにクラス選択ツールが表示されるようになります。

.. code-block:: xml

   <classes sticky="false">
   	<class name="Knight" description="Fight with your Sword" longdescription="You have Iron Armor,Leggings,Boots,and Sword" icon="iron sword">
   		<kit>
   			<chestplate>iron chestplate</chestplate>
   			<leggings>iron leggings</leggings>
   			<boots>iron boots</boots>
   			<item slot="0">iron sword</item>
   			<item slot="7" amount="64">sand</item>
   			<item slot="8" amount="16">cooked beef</item>
   		</kit>
   	</class>
   	<class name="Archer" description="Pew pew, get your Enemy" longdescription="You have power2 Bow and 64 Arrows" icon="bow">
   		<kit>
   			<item slot="0" enchantment="ARROW_DAMAGE:2">bow</item>
   			<item slot="1" amount="64">arrow</item>
   			<item slot="2" amount="8">web</item>
   			<item slot="7" amount="8">Log</item>
   			<item slot="8" amount="16">cooked beef</item>
   		</kit>
   	</class>
   	<class name="Chemist" description="Need more potion? choice it." longdescription="You have basic bow and wooden sword,and many potions" icon="potion">
   		<kit>
   			<chestplate>leather chestplate</chestplate>
   			<leggings>leather leggings</leggings>
   			<boots>leather boots</boots>
   			<item slot="0">wood sword</item>
   			<item slot="1">bow</item>
   			<item slot="2" amount="16">arrow</item>
   			<item slot="3" amount="3" damage="16428">potion</item>
   			<!--  instant health II  -->
   			<item slot="4" amount="3" damage="16456">potion</item>
   			<!--  instant weekness -->
   			<item slot="5" amount="3" damage="16452">potion</item>
   			<!--  instant poison  -->
   			<item slot="7" amount="32">iron fence</item>
   			<item slot="8" amount="16">cooked beef</item>
   		</kit>
   	</class>
   	<class name="Engineer" default="true" description="This is Minecraft" longdescription="You have Iron Pickaxe,bow and TNT!" icon="iron pickaxe">
   		<kit>
   		<item slot="0">wood sword</item>
   		<item slot="1">bow</item>
   		<item slot="2" amount="16">arrow</item>
   		<item slot="3">Iron Pickaxe</item>
   		<item slot="4" amount="3">TNT</item>
   		<item slot="5" amount="1">lever</item>
   		<item slot="7" amount="64">Log</item>
   		<item slot="8" amount="16">cooked beef</item>
   		</kit>
   	</class>
   </classes>

<classes>タグの属性
^^^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明, デフォルト
   :widths: 10,75,15

   ``sticky``, ``true`` を指定するとプレイヤーは一度選択したクラスをゲーム中に変更する事が出来なくなります。, false

<class>タグの属性
^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明, 値
   :widths: 10,75,15

   ``name``, クラス名です。, 文字列
   ``description``, /classesコマンドで表示されるクラスの説明です。, 文字列
   ``longdescription``, クラス選択ツールで表示されるクラスの説明です。, 文字列
   ``icon``, クラス選択ツールで表示されるアイコンです。利用可能なアイコンはMaterialをご覧ください。, :doc:`Material </data/material>`
   ``sticky``, trueを指定するとプレイヤーは一度選択したクラスをゲーム中に変更する事が出来なくなります。,Boolean
   ``default``, trueを指定するとユーザがクラスを選択せずにjoinした場合のデフォルトクラスになります。複数のクラスにデフォルト指定がされている時はランダムに選択されます。, Boolean

