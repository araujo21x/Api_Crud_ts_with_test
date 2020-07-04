import {MigrationInterface, QueryRunner, Table, TableForeignKey, TableColumn} from "typeorm";

export class CreatConsoleUser1593658213033 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
			name: 'usersCosole',
			columns: [
				{
					name: 'id',
					type: 'int',
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'increment',
				},
				{
					name: 'userId',
					type: 'int',
                },
				{
					name: 'consoleId',
                    type: 'int',
				},
			],
        }));

        await queryRunner.createForeignKey("usersCosole", new TableForeignKey({
            columnNames:["userId"],
            referencedColumnNames: ['id'],
            referencedTableName:"users",
            onDelete:"CASCADE"
        }));

        await queryRunner.createForeignKey("usersCosole", new TableForeignKey({
            columnNames:["consoleId"],
            referencedColumnNames: ['id'],
            referencedTableName:"consoles",
            onDelete:"CASCADE"
        }));
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usersCosole');
    }

}
